import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ReportsState } from 'app/modules/reports/store';
import { loadCountries, loadRegions } from 'app/modules/reports/store/actions';
import { getCountries, getRegions } from 'app/modules/reports/store/selectors';
import { CountryDto, RegionDto } from 'app/web-api-client';
import { Observable, map, startWith } from 'rxjs';

@Component({
    selector: 'app-location-info',
    templateUrl: './location-info.component.html',
    styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent {
    @Input() formData: any;

    countryControl = new FormControl();
    regionControl = new FormControl();

    selectedCountry: CountryDto;
    selectedRegion: RegionDto;

    countries$: Observable<CountryDto[] | null | undefined>;
    countries: CountryDto[];
    filteredCountries: Observable<CountryDto[]>;

    regions$: Observable<RegionDto[] | null | undefined>;
    regions: RegionDto[];
    filteredRegions: Observable<RegionDto[]>;

    @Output() previous = new EventEmitter();
    @Output() submit = new EventEmitter();

    locationInfo: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<ReportsState>
    ) {}

    ngOnInit() {
        this.initForm();
        this.initData();
    }

    initForm() {
        this.locationInfo = this.formBuilder.group({
            country: [this.formData.country, Validators.required],
            region: [this.formData.region, Validators.required],
        });
    }

    initData() {
        this.store.dispatch(loadCountries());

        this.countries$ = this.store.select(getCountries);
        this.countries$.subscribe((countries) => {
            this.countries = countries;

            this.filteredCountries = this.countryControl.valueChanges.pipe(
                startWith({} as CountryDto),
                map((country) =>
                    country && typeof country === 'object'
                        ? country.name
                        : country
                ),
                map((name: string) =>
                    name ? this._filterCountry(name) : this.countries.slice()
                )
            );
        });

        this.regions$ = this.store.select(getRegions);
        this.regions$.subscribe((regions) => {
            this.regions = regions;

            this.filteredRegions = this.regionControl.valueChanges.pipe(
                startWith({} as RegionDto),
                map((region) =>
                    region && typeof region === 'object' ? region.name : region
                ),
                map((name: string) =>
                    name ? this._filterRegion(name) : this.regions.slice()
                )
            );
        });
    }

    get f() {
        return this.locationInfo.value;
    }

    private _filterCountry(name: string): CountryDto[] {
        return this.countries.filter(
            (option) =>
                option.name.toLowerCase().indexOf(name.toLowerCase()) === 0
        );
    }

    displayCountryFn(country: CountryDto): string {
        return country ? country.name : '';
    }

    updateSelectedCountry(event: any) {
        this.selectedCountry = event.option.value;
        const country: CountryDto = event.option.value;

        this.locationInfo.patchValue({ country: country.id });

        this.store.dispatch(loadRegions({ payload: country.id }));
    }

    private _filterRegion(name: string): RegionDto[] {
        return this.regions.filter(
            (option) =>
                option.name.toLowerCase().indexOf(name.toLowerCase()) === 0
        );
    }

    displayRegionFn(region: RegionDto): string {
        return region ? region.name : '';
    }

    updateSelectedRegion(event: any) {
        this.selectedRegion = event.option.value;
        const region: RegionDto = event.option.value;

        this.locationInfo.patchValue({ region: region.id });
    }

    onPrevious() {
        this.previous.emit();
    }

    onSubmit() {
        this.submit.emit(this.locationInfo.value);
    }

    onCountryChange() {
        if (this.f.country != '')
            this.store.dispatch(loadRegions({ payload: this.f.country }));
    }
}