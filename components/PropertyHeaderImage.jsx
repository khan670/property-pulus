import Image from "next/image";

function PropertyHeaderImage({ image }) {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            height={0}
            width={0}
            sizes="100vw"
            alt=""
            className="object-cover h-[400px] w-full"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}

export default PropertyHeaderImage;
