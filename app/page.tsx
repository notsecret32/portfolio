export default function HomePage() {
  return (
    <div>
      <div className="flex flex-row gap-16">
        <div>
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p className="text-lg">p - large</p>
          <p>p - medium</p>
          <p className="text-sm">p - small</p>
        </div>
        <div>
          <div className="text-6xl">H1</div>
          <div className="text-5xl">H2</div>
          <div className="text-4xl">H3</div>
          <div className="text-3xl">H4</div>
          <div className="text-2xl">H5</div>
          <div className="text-xl">H6</div>
          <div className="text-lg">p - large</div>
          <div className="text-base">p - medium</div>
          <div className="text-sm">p - small</div>
        </div>
      </div>
    </div>
  );
}
