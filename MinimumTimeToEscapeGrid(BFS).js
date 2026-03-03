function nearestExit(maze, entrance) {
    const rows = maze.length;
    const cols = maze[0].length;
    const [startRow, startCol] = entrance;

    if (maze[startRow][startCol] === '+') {
        return -1;
    }

    const queue = [];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    queue.push([startRow, startCol, 0]);
    visited[startRow][startCol] = true;

    while (queue.length > 0) {
        const [row, col, time] = queue.shift();
        if ((
                    row === 0 ||
                    row === rows - 1 ||
                    col === 0 ||
                    col === cols - 1
                )&& !(row === startRow && col === startCol) ){
                    return time + 1;
                }
        for (const [dx,dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                maze[newRow][newCol] === '.' &&
                !visited[newRow][newCol]
            ) {
                visited[newRow][newCol] = true;
                queue.push([newRow, newCol, time + 1]);
            }
        }
    }
    return -1;
}

const room = [
    ['+', '+', '.', '+'],
    ['.', '.', '.', '+'],
    ['+', '+', '+', '.']
  ];
const start = [1, 2];
console.log(nearestExit(room, start));