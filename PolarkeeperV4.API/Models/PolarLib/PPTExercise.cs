using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PolarkeeperV4.API.Models.PolarLib
{
    public class HeartRate
    {
        public int Id { get; set; }
        public int resting { get; set; }
        public int average { get; set; }
        public int maximum { get; set; }
        public int vo2Max { get; set; }

        public Boolean hasData()
        {
            if (resting <= 0 && average <= 0 && maximum <= 0 && vo2Max <= 0)
                return false;

            return true;
        }
    }

    public class PPTExercise
    {
        public int Id { get; set; }
        public DateTime time { get; set; }
        public String sport { get; set; }
        public int calories { get; set; }
        public TimeSpan duration { get; set; }
        public HeartRate heartRate { get; set; }
        public double distance { get; set; }
        public DateTime created { get ; set; }
        public bool Uploaded { get; set; }
    }

    public class PPTExerciseViewModel
    {
        public PPTExerciseViewModel()
        {
            
        }
        public PPTExerciseViewModel(PPTExercise ex)
        {
            time = ex.time;
            sport = ex.sport;
            calories = ex.calories;
            duration = ex.duration;
            averageHeartRate = ex.heartRate.average;
            maxHeartRate = ex.heartRate.maximum;
            distance = ex.distance;
        }
        public int Id { get; set; }
        public DateTime time { get; set; }
        public String sport { get; set; }
        public int calories { get; set; }
        public TimeSpan duration { get; set; }
        public int averageHeartRate { get; set; }
        public int maxHeartRate { get; set; }
        public double distance { get; set; }
        public ApplicationUser User { get; set; }
        public string UserId { get; set; }
    }
}
