import React from 'react';
import LifeMatrix from "./service/LifeMatrix";

function getMatrix(columns: number, rows: number): number[][] {
  const res: number[][] = new Array<number[]>();
  for(let i = 0; i < rows; i++) {
      res[i] = [];
      for(let j = 0; j < columns; j++) {
          res[i][j] = getNumber(i, j);
      }
  }
  return res;
}
function getNumber(i: number, j: number): number {
  return i == 2 && (j == 1 || j == 2 || j == 3) ? 1 : 0;
}
function getMatrixExpect(columns: number, rows: number): number[][] {
  const res: number[][] = new Array<number[]>();
  for(let i = 0; i < rows; i++) {
      res[i] = [];
      for(let j = 0; j < columns; j++) {
          res[i][j] = getNumberExpect(i, j);
      }
  }
  return res;
}
function getNumberExpect(i: number, j: number): number {
  return j == 2 && (i == 1 || i == 2 || i == 3) ? 1 : 0;
}
function getMatrix1(columns: number, rows: number): number[][] {
  const res: number[][] = new Array<number[]>();
  for(let i = 0; i < rows; i++) {
      res[i] = [];
      for(let j = 0; j < columns; j++) {
          res[i][j] = getBlackSquare(i, j);
      }
  }
  return res;
}
function getBlackSquare(i: number, j: number): number {
  return (i == 1 && j == 1) || (i == 2 && j == 2) || (i == 1 && j == 2) || (i == 2 && j == 1) ? 1 : 0;
}

const lifeMatrix = new LifeMatrix(getMatrix(5, 5));
const lifeMatrix1 = new LifeMatrix(getMatrix1(4, 4));

test('life game nextStep 1', () => {
  const expected = getMatrixExpect(5 ,5);
  expect(lifeMatrix.nextStep()).toEqual(expected);
});

test('life game nextStep 2', () => {
  const expected = getMatrix1(4, 4);
  expect(lifeMatrix1.nextStep()).toEqual(expected); 
});
