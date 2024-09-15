import { skills } from '@/lib/data'

export default function Skills() {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 w-5/6 md:w-11/12 lg:w-full max-w-7xl mx-auto p-10 mb-5 -mt-5 border border-solid border-[#e3e6ee] rounded-3xl shadow-sm'>
            {skills.map((item) => (
                <div className='flex flex-col gap-2 lg:gap-4' key={item.title}>
                    <item.icon className='size-10 text-amber-600' />
                    <h2 className='text-xl lg:text-3xl font-semibold'>
                        {' '}
                        {item.title}{' '}
                    </h2>
                    <p className='text-gray-600'>{item.tagline} </p>
                </div>
            ))}
        </section>
    )
}
