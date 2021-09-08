import type { Entry } from 'contentstack';

export interface EntryContentType extends Entry {
    _content_type_uid?: string
}
export interface PageFields extends EntryContentType {
    title: string;
    components?: EntryContentType[]
}
