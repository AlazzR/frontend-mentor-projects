import "./ErrorState.css";

export default function ErrorState(props: { show?: boolean; message: string }) {
  const { show = false, message } = props;
  return <div className={"error-state" + (show ? " show" : "")}>{message}</div>;
}
