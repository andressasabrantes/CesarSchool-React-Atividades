export default function Joke({ setup, punchline }) {
  return (
    <div data-testid="Joke">
      {setup && <h3>Setup: {setup} </h3>}
      {punchline && <p>Punchline: {punchline} </p>}
      <hr />
    </div>
  );
}
