import networkx as nx
import numpy as np
import itertools
get_not_isomorphic_connected_graphs(3)



    not_isomorphic_graphs = []
    for i in graphs:
        for j in i:
            g1 = G.edge_subgraph(j).copy()
            if(len(g1.nodes())>=number_of_nodes):
                if(nx.is_connected(g1)):
                    not_isomorphic_graphs.append(g1)
    return(not_isomorphic_graphs)

def get_non_isomorphic_graphs_from_edges(edges,G):
    res = []
    res.append(edges[0])
    for i in range(len(edges)-1):
        for j in range(len(res)):
            add = True
            g1 = G.edge_subgraph(edges[i+1]).copy()  
            g2 = G.edge_subgraph(res[j]).copy()  
            if (nx.is_isomorphic(g1,g2)):
                add = False
                break
        if(add == True):        
            res.append(edges[i+1])
            
    return(res)
 