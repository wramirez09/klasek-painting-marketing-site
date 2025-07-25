import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(dark-nav)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(dark-nav)/about-us" | "/(dark-nav)/about-us/faqs" | "/(dark-nav)/about-us/service-area" | "/(dark-nav)/about-us/service-area/(city-pages)/berwyn-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/burr-ridge-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/clarendon-hills-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/downers-grove-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/forest-park-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/hinsdale-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/la-grange-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/oak-brook-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/oak-park-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/orland-park-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/riverside-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/western-springs-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/westmont-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/willow-springs-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/willowbrook-house-painting" | "/(dark-nav)/about-us/testimonials" | "/(dark-nav)/photo-gallery" | "/(dark-nav)/photo-gallery/brick-painting" | "/(dark-nav)/photo-gallery/cedar-replacement" | "/(dark-nav)/photo-gallery/cedar-shingle-and-stucco-repair" | "/(dark-nav)/photo-gallery/cedar-siding-repair-paint" | "/(dark-nav)/photo-gallery/exterior-hardie-board" | "/(dark-nav)/photo-gallery/past-projects" | "/(dark-nav)/photo-gallery/siding-and-stucco" | "/(dark-nav)/photo-gallery/siding-repair" | "/(dark-nav)/photo-gallery/stucco-and-cedar-siding" | "/(dark-nav)/photo-gallery/stucco-and-trim" | "/(dark-nav)/photo-gallery/stucco-repair" | "/(dark-nav)/photo-gallery/stucco-siding-repair-paint" | "/(dark-nav)/photo-gallery/trim" | "/(dark-nav)/photo-gallery/victorian-homes" | "/(dark-nav)/photo-gallery/white-cedar-siding"
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;