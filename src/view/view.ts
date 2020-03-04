export interface  View {
    title : string;
    data : object;
    initView() : void;
    htmlGeneration() : void;
}
