import "./Input.css";
import Input from "./input";

export default {
    title: "Form/Input",
    component: Input
}

export const Small=()=> <Input size="small" placeholder="small"/>
export const Medium=()=> <Input size="medium" placeholder="medium"/>
export const Large=()=> <Input size="large" placeholder="large"/>

Small.storyName="Small Input";


