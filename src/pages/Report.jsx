const Report = () => {
  return (
    <div className="grid grid-cols-2 gap-10 p-8">
      <input
        type="text"
        placeholder="neutral"
        className="input input-neutral"
      />
      <input
        type="text"
        placeholder="Primary"
        className="input input-primary"
      />
      <input
        type="text"
        placeholder="Secondary"
        className="input input-secondary"
      />
      <input type="text" placeholder="Accent" className="input input-accent" />

      <input type="text" placeholder="Info" className="input input-info" />
      <input
        type="text"
        placeholder="Success"
        className="input input-success"
      />
      <input
        type="text"
        placeholder="Warning"
        className="input input-warning"
      />
      <input type="text" placeholder="Error" className="input input-error" />
    </div>
  );
};

export default Report;
