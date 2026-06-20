import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(light-nav)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(light-nav)/blog" | "/(light-nav)/blog/[title]" | "/(light-nav)/careers" | "/(light-nav)/contact-us" | "/(light-nav)/legal/privacy-policy" | "/(light-nav)/services" | "/(light-nav)/services/brick-painting-repair" | "/(light-nav)/services/brick-painting-repair/exterior-brick-painting" | "/(light-nav)/services/brick-painting-repair/exterior-brick-repair" | "/(light-nav)/services/brick-painting-repair/exterior-brick-staining" | "/(light-nav)/services/commercial-exterior-painting" | "/(light-nav)/services/design-color-consultation" | "/(light-nav)/services/exterior-home-painting" | "/(light-nav)/services/exterior-home-painting/exterior-paint-contractor" | "/(light-nav)/services/exterior-home-painting/historic-house-painting" | "/(light-nav)/services/gutter-installation-repair" | "/(light-nav)/services/siding-painting-repair" | "/(light-nav)/services/siding-painting-repair/aluminum-siding-painting" | "/(light-nav)/services/siding-painting-repair/aluminum-siding-repair" | "/(light-nav)/services/siding-painting-repair/cedar-siding-painting" | "/(light-nav)/services/siding-painting-repair/cedar-siding-repair" | "/(light-nav)/services/siding-painting-repair/hardie-board-painting" | "/(light-nav)/services/siding-painting-repair/hardie-board-repair" | "/(light-nav)/services/siding-painting-repair/hardie-board-services" | "/(light-nav)/services/siding-painting-repair/vinyl-siding-painting" | "/(light-nav)/services/siding-painting-repair/vinyl-siding-repair" | "/(light-nav)/services/stucco-painting-repair" | "/(light-nav)/services/stucco-painting-repair/stucco-painting" | "/(light-nav)/services/stucco-painting-repair/stucco-repair"
type LayoutParams = RouteParams & { title?: string }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { params: LayoutParams; data: LayoutData; children: import("svelte").Snippet }