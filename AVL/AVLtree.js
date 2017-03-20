template<class Type>  
BSTNode<Type>* AVLTree<Type>::Delete(const Type& key){  
    return root = Delete(root, key);  
}  
  
  
template<class Type>  
BSTNode<Type>* AVLTree<Type>::Delete(BSTNode<Type>* &node, const Type &key){  
    if(node == NULL){  
        return NULL;  
    }  
    /** 
     * if we find the matched key, 
     * delete the matched node and replace it by the most left node 
     * of its right child 
     */  
    else if(key == node->key){  
        if(!node->right){  
            BSTNode<Type> *newNode = node->left;  
            delete node;  
            return newNode;  
        }else{  
            BSTNode<Type> *secondMostLeftNode = node->right;  
            if(secondMostLeftNode->left == NULL){  
                return secondMostLeftNode;  
            }  
            while(secondMostLeftNode->left->left)  
                secondMostLeftNode = secondMostLeftNode->left;  
            BSTNode<Type> *mostLeftNode = secondMostLeftNode->left;  
            secondMostLeftNode->left->left = node->left;  
            secondMostLeftNode->left->right = node->right;  
            secondMostLeftNode->left = NULL;  
            return mostLeftNode;  
        }  
    }  
    //from bottom to the top  
    else if(key < node->key){  
        node->left = Delete(node->left, key);  
    }  
    else{  
        node->right = Delete(node->right, key);  
    }  
    if(node->left)  
        node->left = Rotate(node->left);  
    if(node->right)  
        node->right = Rotate(node->right);  
    node = Rotate(node);  
    return node;  
}  