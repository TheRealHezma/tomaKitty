import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from 'expo-router';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handlePress = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
        checkWinner(newBoard);
    };

    const checkWinner = (newBoard) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                setWinner(newBoard[a]);
                return;
            }
        }

        if (!newBoard.includes(null)) {
            setWinner('Tie');
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <View style={styles.board}>
                {board.map((cell, index) => (
                    <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(index)}>
                        <Text style={styles.cellText}>{cell}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            {winner && (
                <Text style={styles.winnerText}>
                    {winner === 'Tie' ? "It's a Tie!" : `Winner: ${winner}`}
                </Text>
            )}
            <Button title="Restart Game" onPress={resetGame} />
            {/* New Button to Navigate to Test Page */}
            <Button title="Home" onPress={() => navigation.navigate('/')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    board: {
        width: 300,
        height: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    cell: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellText: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    winnerText: {
        fontSize: 24,
        marginBottom: 20,
        color: 'green',
    },
});

export default TicTacToe;
