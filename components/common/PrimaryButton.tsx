import Image from "next/image";

type ButtonProps = {
    type: "button" | "submit";
    text: string;
    icon?: string;
    variant: string;
}
const PrimaryButton = ({ type, text, icon, variant }: ButtonProps) => {
    return (
        <button type={type} className={`${variant} rounded-md gap-5 flex items-center justify-center`}>
            {icon && <Image src={icon} alt={text} width={24} height={24} />}
            <label>{text}</label>
        </button>
    )
}

export default PrimaryButton