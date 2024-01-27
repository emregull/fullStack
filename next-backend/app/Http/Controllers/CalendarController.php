<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CalendarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try{
            $validatedData = $request->validate([
                'date' => 'required',
                'title' => 'required',
                'note' => 'nullable'
            ]);
            Calendar::create($validatedData);
            return response()->json(['message' => 'Created succesfully']);
        }catch (ValidationException $e){
            return response()->json(['message' => $e]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Calendar $calendar)
    {
        $data = Calendar::all();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function edit(Calendar $calendar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        try{
            $validatedData = $request->validate([
                'id' => 'required',
                'date' => 'required',
                'title' => 'required',
                'note' => 'nullable'
            ]);
            $calendar = Calendar::find($validatedData['id']);
            $calendar->update($validatedData);
            return response()->json(['message' => 'nevar']);
        }catch (ValidationException $e){
            return response()->json(['message' => $e]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function destroy(Calendar $calendar)
    {
        //
    }
}
