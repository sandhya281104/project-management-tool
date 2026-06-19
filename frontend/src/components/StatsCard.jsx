function StatsCard({title,value}) {
  return (
    <div
      style={{
        background:"#1e293b",
        padding:"20px",
        borderRadius:"15px",
        width:"250px"
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

export default StatsCard;