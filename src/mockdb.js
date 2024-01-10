export const recordings = [];

export const addRecording = (recording) => {
  recordings.push(recording);
};

export const getAllRecordings = () => {
  return recordings;
};

export const updateRecording = (id, updatedRecording) => {
  const index = recordings.findIndex((recording) => recording.id === id);

  if (index !== -1) {
    recordings[index] = { ...recordings[index], ...updatedRecording };
  }
};

export const deleteRecording = (id) => {
  const index = recordings.findIndex((recording) => recording.id === id);

  if (index !== -1) {
    recordings.splice(index, 1);
  }
};
