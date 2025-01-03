import Image from "next/image";
export default function page () {
    return (
        <article className="mt-12 nb-24 px-12 flex flex-col gap-y-8">
            {/* Blog Title */}
        <h1 className="text-xl xs:text-3xl font-bold text-dark dark:text-light">
            Delicious Ice-cream | Strawberry flavour
        </h1>
        {/* Featured Image */}
        <Image
            src={"/icecream.jpg"}
        width={500}
        height={500}
        alt="Ice-cream for everyone"
        className="rounded"
        />
        {/* Blog summary section */}
        <section>
            <h2 className="text-xl xs:text-2xl nd:text-3xl font-bold uppercase text-accentDarkPrimary">
                Summary
            </h2>
            <p>My name is Syeda Rohab and this is my first blog website yummy strawberry icecream</p>
        </section>
        {/* Author section (image & bio ) */}
        <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-centre justify-start">
        <Image
        src={"/icecream.jpg"}
        width={200}
        height={200}
        alt="author"
        className="object-cover rounded-full h-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-dark dark:text-light">icecream</h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            yummy and Delicious strawberry icecream  please taste with family and freinds 
            my name is rohab my first blog website i am a student of governor house karachi enrolled in AI, METAVERSE, WEB3.0
            </p>

        </div>
        </section>
        

        </article>
    )
}