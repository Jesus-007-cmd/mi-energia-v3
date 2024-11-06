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

	return (

		<section className='flex flex-col'>

			{(props.sectionRows || []).map((row, key) => {

				const imageStyle = {
					backgroundImage: `url(${row.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}

				const imageClasses = (index:number) => {
					return `h-[65vh] ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`
				}

				const textContainerClasses = (index:number) => {
					return `flex items-center p-6 ${index % 2 === 0 ? 'md:order-1 bg-neutral-800 text-white' : 'md:order-2'}`
				}

				return (

					<div className='grid grid-cols-1 md:grid-cols-2' key={key}>

						<div className={textContainerClasses(key)}>
							<div className="flex flex-col">	
								<h4 className="text-sm">{row.subtitle}</h4>
								<h3 className="text-2xl font-semibold pb-1">{row.title}</h3>
								<p>{row.description}</p>
							</div>
						</div>

						<div style={imageStyle} className={imageClasses(key)}/>

					</div>

				)

			})}

		</section>

	)

}
