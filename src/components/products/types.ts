interface ProductMaterial {
    name: string;
    description: string;
}
interface ProductColor {
    name: string;
    option: string[];
}

interface ProductDimension {
    length: string;
    width: string;
    height: string;
}
export type Product = {
    id: string;
    title: string;
    description: string;
    image: string[];
    material: ProductMaterial[];
    color: ProductColor[];
    dimension: ProductDimension;
    usability: string[];
    idealUseCase: string[];
}