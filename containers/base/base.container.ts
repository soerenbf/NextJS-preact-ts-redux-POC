import * as React from "react";

type IContainerProps<TContainerProps> = IBaseContainerProps<TContainerProps> & TContainerProps;

export interface IBaseContainerProps<TContainerProps> {
    children: (props: TContainerProps) => any;
}

export function generateBaseContainer<TContainerProps>(): React.FC<IContainerProps<TContainerProps>> {
    return props => props.children(props);
}
