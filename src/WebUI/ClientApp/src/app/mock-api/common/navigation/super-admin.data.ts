/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboard',
    },
    {
        id: 'reports',
        title: 'Reports',
        type: 'collapsable',
        icon: 'heroicons_outline:clipboard-list',
        children: [
            {
                id: 'reports.create',
                title: 'Create a Report',
                type: 'basic',
                link: '/reports/create',
            },
            {
                id: 'reports.list',
                title: 'View all Reports',
                type: 'basic',
                link: '/reports/list',
            },
            {
                id: 'occurrences.list',
                title: 'Occurrences',
                type: 'basic',
                link: '/reports/occurrences',
            },
        ],
    },
    {
        id: 'regions',
        title: 'Regions',
        type: 'collapsable',
        icon: 'heroicons_outline:location-marker',
        children: [
            {
                id: 'regions.create',
                title: 'Add Region',
                type: 'basic',
                link: '/regions/create',
            },
            {
                id: 'regions.list',
                title: 'View all',
                type: 'basic',
                link: '/regions/list',
            },
        ],
    },
    {
        id: 'species',
        title: 'Species',
        type: 'collapsable',
        icon: 'heroicons_outline:finger-print',
        children: [
            {
                id: 'species.create',
                title: 'Add Species',
                type: 'basic',
                link: '/species/create',
            },
            {
                id: 'species.list',
                title: 'View all',
                type: 'basic',
                link: '/species/list',
            },
        ],
    },
    {
        id: 'diseases',
        title: 'Diseases',
        type: 'collapsable',
        icon: 'heroicons_outline:beaker',
        children: [
            {
                id: 'diseases.create',
                title: 'Add Diseases',
                type: 'basic',
                link: '/diseases/create',
            },
            {
                id: 'diseases.list',
                title: 'View all',
                type: 'basic',
                link: '/diseases/list',
            },
        ],
    },
    {
        id: 'institutions',
        title: 'Institutions',
        type: 'collapsable',
        icon: 'heroicons_outline:office-building',
        children: [
            {
                id: 'institutions.create',
                title: 'Add Institutions',
                type: 'basic',
                link: '/institutions/create',
            },
            {
                id: 'institutions.list',
                title: 'View all',
                type: 'basic',
                link: '/institutions/list',
            },
        ],
    },
    {
        id: 'para-professionals',
        title: 'Para-Professionals',
        type: 'collapsable',
        icon: 'heroicons_outline:identification',
        children: [
            {
                id: 'para-professionals.create',
                title: 'Add Para-Professional',
                type: 'basic',
                link: '/para-professionals/create',
            },
            {
                id: 'para-professionals.list',
                title: 'View all',
                type: 'basic',
                link: '/para-professionals/list',
            },
        ],
    },
    {
        id: 'users',
        title: 'Users',
        type: 'collapsable',
        icon: 'heroicons_outline:users',
        children: [
            {
                id: 'users.create',
                title: 'Add User',
                type: 'basic',
                link: '/users/create',
            },
            {
                id: 'users.list',
                title: 'View all',
                type: 'basic',
                link: '/users/list',
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboard',
    },
    {
        id: 'reports',
        title: 'Reports',
        type: 'collapsable',
        icon: 'heroicons_outline:clipboard-list',
        children: [
            {
                id: 'reports.create',
                title: 'Create a Report',
                type: 'basic',
                link: '/reports/create',
            },
            {
                id: 'reports.list',
                title: 'View all Reports',
                type: 'basic',
                link: '/reports/list',
            },
            {
                id: 'occurrences.list',
                title: 'Occurrences',
                type: 'basic',
                link: '/reports/occurrences',
            },
        ],
    },
    {
        id: 'regions',
        title: 'Regions',
        type: 'collapsable',
        icon: 'heroicons_outline:location-marker',
        children: [
            {
                id: 'regions.create',
                title: 'Add Region',
                type: 'basic',
                link: '/regions/create',
            },
            {
                id: 'regions.list',
                title: 'View all',
                type: 'basic',
                link: '/regions/list',
            },
        ],
    },
    {
        id: 'species',
        title: 'Species',
        type: 'collapsable',
        icon: 'heroicons_outline:finger-print',
        children: [
            {
                id: 'species.create',
                title: 'Add Species',
                type: 'basic',
                link: '/species/create',
            },
            {
                id: 'species.list',
                title: 'View all',
                type: 'basic',
                link: '/species/list',
            },
        ],
    },
    {
        id: 'diseases',
        title: 'Diseases',
        type: 'collapsable',
        icon: 'heroicons_outline:beaker',
        children: [
            {
                id: 'diseases.create',
                title: 'Add Diseases',
                type: 'basic',
                link: '/diseases/create',
            },
            {
                id: 'diseases.list',
                title: 'View all',
                type: 'basic',
                link: '/diseases/list',
            },
        ],
    },
    {
        id: 'institutions',
        title: 'Institutions',
        type: 'collapsable',
        icon: 'heroicons_outline:office-building',
        children: [
            {
                id: 'institutions.create',
                title: 'Add Institutions',
                type: 'basic',
                link: '/institutions/create',
            },
            {
                id: 'institutions.list',
                title: 'View all',
                type: 'basic',
                link: '/institutions/list',
            },
        ],
    },
    {
        id: 'para-professionals',
        title: 'Para-Professionals',
        type: 'collapsable',
        icon: 'heroicons_outline:identification',
        children: [
            {
                id: 'para-professionals.create',
                title: 'Add Para-Professional',
                type: 'basic',
                link: '/para-professionals/create',
            },
            {
                id: 'para-professionals.list',
                title: 'View all',
                type: 'basic',
                link: '/para-professionals/list',
            },
        ],
    },
    {
        id: 'users',
        title: 'Users',
        type: 'collapsable',
        icon: 'heroicons_outline:users',
        children: [
            {
                id: 'users.create',
                title: 'Add User',
                type: 'basic',
                link: '/users/create',
            },
            {
                id: 'users.list',
                title: 'View all',
                type: 'basic',
                link: '/users/list',
            },
        ],
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboard',
    },
    {
        id: 'reports',
        title: 'Reports',
        type: 'collapsable',
        icon: 'heroicons_outline:clipboard-list',
        children: [],
    },
    {
        id: 'regions',
        title: 'Regions',
        type: 'collapsable',
        icon: 'heroicons_outline:location-marker',
        children: [],
    },
    {
        id: 'species',
        title: 'Species',
        type: 'collapsable',
        icon: 'heroicons_outline:finger-print',
        children: [],
    },
    {
        id: 'diseases',
        title: 'Diseases',
        type: 'collapsable',
        icon: 'heroicons_outline:beaker',
        children: [],
    },
    {
        id: 'institutions',
        title: 'Institutions',
        type: 'collapsable',
        icon: 'heroicons_outline:office-building',
        children: [],
    },
    {
        id: 'para-professionals',
        title: 'Para-Professionals',
        type: 'collapsable',
        icon: 'heroicons_outline:identification',
        children: [],
    },
    {
        id: 'users',
        title: 'Users',
        type: 'collapsable',
        icon: 'heroicons_outline:users',
        children: [],
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboard',
    },
    {
        id: 'reports',
        title: 'Reports',
        type: 'collapsable',
        icon: 'heroicons_outline:clipboard-list',
        children: [],
    },
    {
        id: 'regions',
        title: 'Regions',
        type: 'collapsable',
        icon: 'heroicons_outline:location-marker',
        children: [],
    },
    {
        id: 'species',
        title: 'Species',
        type: 'collapsable',
        icon: 'heroicons_outline:finger-print',
        children: [],
    },
    {
        id: 'diseases',
        title: 'Diseases',
        type: 'collapsable',
        icon: 'heroicons_outline:beaker',
        children: [],
    },
    {
        id: 'institutions',
        title: 'Institutions',
        type: 'collapsable',
        icon: 'heroicons_outline:office-building',
        children: [],
    },
    {
        id: 'para-professionals',
        title: 'Para-Professionals',
        type: 'collapsable',
        icon: 'heroicons_outline:identification',
        children: [],
    },
    {
        id: 'users',
        title: 'Users',
        type: 'collapsable',
        icon: 'heroicons_outline:users',
        children: [],
    },
];