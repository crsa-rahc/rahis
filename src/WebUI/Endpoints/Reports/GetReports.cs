﻿using System.Net;
using Ardalis.ApiEndpoints;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
using RegionalAnimalHealth.Application.Common.Security;
using RegionalAnimalHealth.Application.Contracts.Reports.Queries.GetOccurrences;
using RegionalAnimalHealth.Application.Contracts.Reports.Queries.GetReports;

namespace WebUI.Endpoints.Reports;

[OpenApiTag("Reports")]
public class GetReports : EndpointBaseAsync.WithoutRequest.WithActionResult<List<ReportListDto>>
{
    private readonly IMediator _mediator;

    public GetReports(IMediator mediator)
    {
        _mediator = mediator;
    }


    [Authorize(Roles = $"{SecurityRoles.SuperAdmin}, {SecurityRoles.Admin}, {SecurityRoles.Verifier}")]
    [HttpGet("api/reports")]
    [OpenApiOperation(
            "Gets the list of reports",
            "Gets the list of reports in the system")
        ]
    [ProducesResponseType((int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.BadRequest)]
    public override async Task<ActionResult<List<ReportListDto>>> HandleAsync(CancellationToken cancellationToken = default)
    {
        var data = await _mediator.Send(new GetReportsQuery());
        return Ok(data);
    }
}
