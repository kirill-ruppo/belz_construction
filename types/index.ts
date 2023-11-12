export interface CustomTitleProps {
    text: string,
    textMain: string,
    textMainColor: boolean,
    titleDesc?: string
}


export interface CustomButtonProps {
    text: string;
    route: string;
    styles?: string;
}

export interface ServiceCardProps {
    img: string;
    title: string;
    desc: string;
    slug?: string;
    detail?: [title: string, text:string];
}

export interface ButtonPageLinkProps {
    route: string,
    children: string,
    onClick?: any,
}
export interface ServiceTemplateProps{
    title?: string, 
    desc?: string
}