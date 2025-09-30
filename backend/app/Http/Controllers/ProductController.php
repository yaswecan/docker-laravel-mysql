<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends Controller {
    public function details($id)
    
    {
        // Vérifie que l'ID est bien présent et valide
        if (empty($id) || !is_numeric($id) || intval($id) <= 0) {
            return response()->json([
                'error' => 'ID invalide ou manquant'
            ], 400); // Erreur 400 Bad Request
        }

        try {
            $product = Product::find($id);

            if (!$product) {
                return response()->json([
                    'error' => 'Produit non trouvé'
                ], 404); // Erreur 404 Not Found
            }

            return response()->json([
                'product' => $product
            ], 200); // 200 OK

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Une erreur est survenue',
                'message' => $e->getMessage()
            ], 500); // Erreur 500 Internal Server Error
        }
    }
}
