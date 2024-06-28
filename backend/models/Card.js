// This will contain the Card model schema.

import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  set: {
    type: String,
    required: true,
  },
});

export const Card = mongoose.model('Card', cardSchema);
