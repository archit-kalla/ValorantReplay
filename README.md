# ValorantReplay

ValorantReplay is a web application to view your valorant games, round by round like a psuedo replay. A personal experiment in Node.js and Angular alongside RESTful API design.

## Goals

VALORANT is a competitive 5v5 tactical shooter that offers a fresh take on the genre. With its diverse maps and introduction of game-changing abilities and agents, seasoned veterans of the genre and new players are faced with a new challenge of learning maps and strategies to progress the ranked ladder and improve their skills. A core aspect of VALORANT is gaining a positional advantage on your opponents. The goal of ValorantReplay is to offer all players access to insights about their positioning in game so that all players can improve their skills and climb the ranked ladder. While there are obvious benefits to the average solo queue player, I expect ValorantReplay to be a lucrative tool for 5-stack teams of all skill levels, from the average ranked ladder 5 stack to professional VALORANT teams.

## Features

[v1.0]: Initial release:
Match analysis for every competitve match but Fracture
Analysis of match results include: Information available in "Timeline" in game, heatmap of player positions after plant, and heatmap of player kills.
heatmaps will be generated based off of econmics of each team. For example, if a player is on the red team, the heatmap will be red. If a player is on the blue team, the heatmap will be blue. If Red team is on save, the heatmap will show heat map based off similar economic values aggregated from the latest match endpoint from API.
Highlight common angles where players are positioned after plant
This will be based off of the heatmap of player positions.
Will not require account log in
see positioning per engagement (a replay sort of design, strictly 2d)
Based off of KillDto playerLocations similar to how in game hovering each kill works.
[v1.1]: Heatmaps will change based off of similar team compositions and economic situation
[v1.2-1.X]: Improvements to the heatmap and analysis of match results
[v2.0]: Client will support 3d rendering of player positioning and heatmap
[v2.1-2.x]: improvements on 3d rendering and heatmap/match analysis
[v3.0]: Offer execute strategies and post plant setups
[v3.1-3.x]: use data mining methods to extract data from collected match results, potenitally develop model to predict player positioning based off of team composition and economic situation. This will be a massive task and will most likely require a lot of time and effort / resources.