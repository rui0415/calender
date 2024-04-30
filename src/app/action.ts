export default function handleClick(props: {state:string}) {
  window.location.href = `/${props.state}`;
}