<?php

namespace App\Http\Controllers;

use App\Models\Categorie;

class CategoryController extends Controller {
    public function index() {
        try {
            $categories = Categorie::all();
    
            return response()->json([
                'success' => true,
                'categories' => $categories
            ], 200); // 200 OK
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => 'Une erreur est survenue lors de la récupération des catégories.',
                'message' => $e->getMessage()
            ], 500); // ERREUR 500 Internal Server Error
        }
    }
}
