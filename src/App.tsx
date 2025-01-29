import { MouseEvent, useState } from 'react';
import './App.css';
import ResetButton from './components/buttons/ResetButton';
import Editor from './components/Editor';
import LineSeparator from './components/LineSeparator';
import ContentButton from './ContentButton';
import PrimaryButton from './PrimaryButton';
import Logo from './components/Logo';
import Text from './components/Text';

function App() {
	const [text, setText] = useState('');
	const [showText, setShowText] = useState(false);
	const [bgImage, setBgImage] = useState<string | undefined>(undefined);
	const [textColor, setTextColor] = useState('');

	const handleBgChange = event => {
		const file = event.target.files[0];

		console.log(file);

		if (file) {
			const reader = new FileReader();

			reader.onload = e => {
				setBgImage(e.target?.result as string);
			};

			reader.readAsDataURL(file);
		}
	};

	console.log(bgImage);

	return (
		<div className='flex gap-4'>
			<Editor src={bgImage ? bgImage : 'src/assets/start-img.png'}>
				{showText ? (
					<Text
						onChange={e => {
							console.log(e.target.value);
							setText(e.target.value);
						}}
					/>
				) : null}
			</Editor>
			<div className='min-w-[759px] bg-white flex flex-col gap-8'>
				<div className='flex justify-between items-center'>
					<Logo />

					<ResetButton
						onClick={() => {
							setBgImage('src/assets/start-img.png');
							setText('');
							setShowText(false);
						}}
					/>
				</div>

				<LineSeparator />

				<div className='min-w-full bg-gray-100'>
					<p className='p-6 px-4 text-[18px] font-bold text-[#353535]'>Add content</p>
				</div>

				<div className='flex gap-4 flex-wrap w-[759px] h-[609px]'>
					<ContentButton
						onClick={() => {
							setShowText(true);
						}}
						src='src\assets\text.svg'
						alt='Text image'>
						Text
					</ContentButton>
					<ContentButton src='src\assets\img.svg' alt='Image' isFileInput>
						Image
					</ContentButton>
					<ContentButton
						onInputChange={handleBgChange}
						src='src\assets\background.svg'
						alt='Background image'
						isFileInput>
						Background
					</ContentButton>
				</div>

				<LineSeparator />

				<div className='flex justify-end items-end w-full h-full'>
					<PrimaryButton onClick={() => {}}>Export to PNG</PrimaryButton>
				</div>
			</div>
		</div>
	);
}

export default App;
