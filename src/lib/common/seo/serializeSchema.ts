import type { Thing, WithContext } from 'schema-dts';

export type Schema = Thing | WithContext<Thing>;

export function serializeSchema(schema: Schema): string {
	return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
