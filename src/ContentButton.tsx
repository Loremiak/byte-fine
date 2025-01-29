import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';

type ContentButtonProps = {
	src: string;
	alt: string;
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	isFileInput?: boolean;
	onInputChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

const ContentButton: React.FC<ContentButtonProps> = ({ src, alt, children, onClick, isFileInput, onInputChange }) => {
	return (
		<button
			onClick={onClick}
			className='relative w-[365px] h-[256px] bg-gray-100 pt-[12px] pr-0 pb-0 pl-0 rounded-tl-[10px] flex flex-col items-center justify-center hover:cursor-pointer'>
			<img src={src} alt={alt} />
			<p className='text-center text-[18px] text-[#353535]'>{children}</p>
			{isFileInput ? (
				<input
					type='file'
					id='fileInput'
					onChange={onInputChange}
					className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
				/>
			) : null}
		</button>
	);
};

export default ContentButton;
