export class Product{
    Name: string;
    ImageUrl: string;
    Description: string;

    constructor(name, image, desc){
        this.Name = name;
        this.ImageUrl = image;
        this.Description = desc;
    }
}