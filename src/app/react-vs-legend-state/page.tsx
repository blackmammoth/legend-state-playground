import ParentComponentLegend from "./legend-state";
import ParentComponentReact from "./react-state";

export default function Page() {
    return (
        <>
            <h1>Using React and Memo</h1>
            <ParentComponentReact />
            <br />
            <h1>Using Legend State Observable and Memo</h1>
            <ParentComponentLegend />
        </>
    )
}