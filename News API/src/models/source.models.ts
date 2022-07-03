export interface ISourceData {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}

export interface IResponseSources {
    status: string,
    sources: ISourceData[]
}

