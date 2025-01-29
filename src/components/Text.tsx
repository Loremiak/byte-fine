import { ChangeEventHandler } from 'react';

type TextProps = {
	onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

const Text: React.FC<TextProps> = ({ onChange }) => {
	return (
		<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
			<button className='absolute left-[-20px] top-[-20px] w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
				<img src='src/assets/move.svg' alt='move icon' className='w-6 h-6' />
			</button>
			<button
				// onClick={handleRemoveComponent}
				className='absolute top-[-12px] right-[-12px] text-white bg-white rounded-full w-[24px] h-[24px] flex items-center justify-center'>
				<img src='src\assets\delete.svg' alt='' />
			</button>
			<textarea
				placeholder='Type your text here'
				className='w-[350px] h-[120px] p-[12px] px-[24px] border-2 border-[#7209B7] outline-none resize-none text-[32px] font-bold text-center'
				onChange={onChange}
			/>
			<div className='flex gap-[4px]'>
				{['#FF0000', '#00FF00', '#0000FF', '#FF00FF', ''].map(color => {
					return (
						<button key={color} onClick={() => {}} className='w-[16px] h-[16px] bg-gray-100 rounded-full'></button>
					);
				})}
			</div>
			<div className='absolute right-[-12px] bottom-[12px] w-[24px] h-[24px] bg-[#7209B7] rounded-full border-4 border-white'></div>
		</div>
	);
};

export default Text;
