function countParticipants() {
    let numRounds = parseInt(document.getElementById('rounds').value);
    let participants = 50;
    let remainingParticipants = participants;

    for (let round = 1; round <= numRounds; round++) {
      let groupSize = Math.floor(Math.random() * participants) + 1;
      let groupCount = Math.floor(participants / groupSize);
      remainingParticipants -= participants - (groupCount * groupSize);
      participants = groupCount;
    }

    document.getElementById('result').textContent = "Participants Left: " + Math.floor(remainingParticipants);
  }
  