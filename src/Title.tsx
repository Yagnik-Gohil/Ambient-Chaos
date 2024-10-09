const Title = ({ title }: { title: string }) => {
  return (
    <p className="sm:text-2xl protest-strike-regular text-green-400 z-10 my-5">
      ─── ⋆⋅ {title} ⋅⋆ ──
    </p>
  );
};

export default Title;
