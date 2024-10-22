import { Fragment } from "react";
import myimg from "./photo/img3.jpg";
const cndimage = "https://img.pikbest.com/origin/09/08/90/00KpIkbEsTnFx.jpg!f305cw";

function Abc()
{
    return "this is first function";
}
export default Abc;

export function One()
{
    return <h1 style={{backgroundColor:'red'}}>this is heading</h1>;
}

const name = "kumar";

export function Tow()
{
    const w = 300;
    const a=100;
    return(
      <Fragment>
            <h1>this is second defalt function</h1>
            <h2>sdfsdfhjsdhf {name}</h2>
            <img src={myimg} width={w} alt="shdfjkhsdjfhpicture"/>

            <img src="myphoto/img2.jpg" alt="skhjfjkshdf" width={w}/>
            <img src={cndimage} width={w} alt="ksdfjhsdfjkhsd"/>
            <h1>Total:{50+80}</h1>
            <h1>Total:{a>=500 ? "greater then" : " less then"}</h1>
            <h1>Total:{a>=500 ? "greater then" : a>=300 ? "second level" : a>=200 ?  "third": <p>nothing</p>}</h1>

        </Fragment>
        )
}
