import { ReactNode } from 'react';

type EditorProps = {
	src: string | undefined;
	children: ReactNode;
};

const Editor: React.FC<EditorProps> = ({ src, children }) => {
	return (
		<div className='relative min-w-[759px] bg-[#9B9B9B]'>
			<img src={src} className='object-contain w-full h-full' />
			{children}
		</div>
	);
};

export default Editor;
