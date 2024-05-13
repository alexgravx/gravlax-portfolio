const TextBlock = ({text} : {text: string}) => {
    return (
        <div className="max-w-prose">
            {text}
        </div>
    );
}

export default TextBlock