// Modules
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type Props = {
  sectionRows:SectionRow[];
}

export type SectionRow = {
	image:string;
	title:string;
	subtitle:string;
	description:string;
}

export default function BlackWhiteContainerWithImage (props:Props) {

	// Props
	const { sectionRows } = props;

	function firstConcat (isOdd:boolean) {
		return twMerge(clsx('h-96 p-6 md:px-12 flex flex-col justify-center', (isOdd) ? 'md:order-1 bg-neutral-800 text-white' : 'md:order-2 bg-white text-neutral-800'));
	}
	
	function secondConcat (isOdd:boolean) {
		return twMerge(clsx('min-h-96', (!isOdd) ? 'md:order-1' : 'md:order-2'));
	}

	return (

		<section className='flex flex-col'>

			{sectionRows.map((row, key) => {

				const imageStyle = {
					backgroundImage: `url(${row.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}

				return (

					<div className='flex flex-col md:grid grid-cols-2'>

						<div className={firstConcat(key % 2 !== 0)}>

							<div className="flex flex-col gap-1">

								<div className="flex flex-col">
								
									<h4 className="text-sm">{row.subtitle}</h4>

									<h3 className="text-2xl font-semibold">{row.title}</h3>

								</div>

								<p className="text-lg">{row.description}</p>

							</div>
							
						</div>

						<div style={imageStyle} className={secondConcat(key % 2 !== 0)}></div>

					</div>

				)

			})}

		</section>

	)

}
