'use client';

import { useCallback } from 'react';
import { IconType } from 'react-icons';

interface CategoryInputProps {
	icon: IconType;
	label: string;
	selected?: boolean;
	onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
	icon: Icon,
	label,
	selected,
	onClick,
}) => {
	const handleClick = useCallback(() => {
		onClick(label);
	}, [label, onClick]);

	return (
		<div
			onClick={handleClick}
			className={`
        rounded-xl
        border-4
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
      `}
		>
			<Icon size={30} />
			<div className='font-semibold'>{label}</div>
		</div>
	);
};

export default CategoryInput;
