'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
	var cloudinary: any;
}

interface ImageUploadProps {
	onChange: (value: string) => void;
	value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
	const handleUpload = useCallback(
		(result: any) => {
			onChange(result.info.secure_url);
		},
		[onChange]
	);

	return (
		<CldUploadWidget
			onUpload={handleUpload}
			uploadPreset='your_upload_preset'
			options={{
				maxFiles: 1,
			}}
		>
			{({ open }) => (
				<div
					onClick={() => open?.()}
					className='
            relative
            cursor-pointer
            transition
            border-dashed
            border-2
            p-20
            border-neutral-300
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-neutral-600
          '
				>
					<TbPhotoPlus size={50} />
					<div className='font-semibold'>Upload Image</div>
					{value && (
						<img
							src={value}
							alt='Uploaded Image'
							className='absolute inset-0 w-full h-full object-cover'
						/>
					)}
				</div>
			)}
		</CldUploadWidget>
	);
};

export default ImageUpload;
