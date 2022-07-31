const StepInfo = ({ name, description, link }) => {
    console.log({ name, description, link })
    return (
        <section>
            <h2>{name}</h2>
            <p>{description}</p>
            {
                link?.map((l) => {
                    return <a href={l.link}>{l.name}</a>
                })
            }

        </section>
    );
};

export default StepInfo;
