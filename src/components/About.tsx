function About() {
  const buttonHandler = () => {
    // cv pdf here
  };

  return (
    <>
      <div className="ml-8 flex justify-center items-center">
        <div className="w-[60%]">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            pariatur atque iusto mollitia ratione minus, quasi aperiam, qui
            soluta, voluptate ea? Saepe numquam quas necessitatibus vitae ad ab
            illo sit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Animi pariatur atque iusto mollitia ratione minus, quasi aperiam,
            qui soluta, voluptate ea? Saepe numquam quas necessitatibus vitae ad
            ab illo sit?
          </p>
          <button
            className="bg-blue-200 rounded-2xl p-2 pr-4 pl-4"
            onClick={() => buttonHandler()}
          >
            View CV
          </button>
        </div>
        <div className="bg-green-500 w-[40%]">
          <img />
          <p>image</p>
          {/* img link here */}
        </div>
      </div>
    </>
  );
}

export default About;
