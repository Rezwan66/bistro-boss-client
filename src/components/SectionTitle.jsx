const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center my-10 md:w-4/12 mx-auto">
      <p className="text-[#D99904] italic mb-2">---{subHeading}---</p>
      <h2 className="uppercase text-3xl border-y-4 py-4">{heading}</h2>
    </div>
  );
};
export default SectionTitle;
