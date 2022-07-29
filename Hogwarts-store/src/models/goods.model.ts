export interface GoodModel {
    [Good.Name]: string,
    [Good.Img]: string,
    [Good.House]: string | Array<string>,
    [Good.Categories]: Array<string>,
    [Good.Price]: string,
    [Good.Id]: string,
    [Good.IsFavourite]: boolean,
    [Good.InCart]: boolean
}

export interface GoodJSONModel {
    [GoodJSON.Name]: string,
    [GoodJSON.Img]: string,
    [GoodJSON.House]: string | Array<string>,
    [GoodJSON.Categories]: Array<string>,
    [GoodJSON.Price]: string,
    [GoodJSON.Id]: string
}

export const enum Good {
    Name = 'name',
    Img = 'img',
    House = 'house',
    Categories = 'categories',
    Price = 'price',
    Id = 'id',
    IsFavourite = 'isFavourite',
    InCart = 'inCart'  
}

export const enum GoodJSON {
    Name = 'name',
    Img = 'img',
    House = 'house',
    Categories = 'categories',
    Price = 'price',
    Id = 'id'
}

export const enum Houses {
    All = 'all',
    Gryffindor = 'gryffindor',
    Hufflepuff = 'hufflepuff',
    Ravenclaw = 'ravenclaw',
    Slytherin = 'slytherin'
}
