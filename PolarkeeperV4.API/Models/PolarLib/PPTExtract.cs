using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Xml;

namespace PolarkeeperV4.API.Models.PolarLib
{
    public class PPTExtract
    {
        public static List<PPTExercise> convertXmlToExercises(XmlDocument xml, bool requireSport = false)
        {
            var namespaceManager = new XmlNamespaceManager(xml.NameTable);
            var xmlNodes = xml.GetElementsByTagName("exercise");
            
            if (xmlNodes == null)
                throw new InvalidDataException("No Polar exercises found");

            var exercises = new List<PPTExercise>();
            foreach (XmlElement exerciseNode in xmlNodes)
            {
                var exercise = new PPTExercise();

                XmlNode created = exerciseNode["created"];
                exercise.created = DateTime.Parse(created.InnerText);
                XmlNode timeNode = exerciseNode["time"];
                XmlNode sportNode = exerciseNode["sport"];
                var resultNode = exerciseNode["result"];

                if (timeNode == null  || resultNode == null)
                    continue;

                if (requireSport && sportNode == null)
                    continue;

                XmlNode distanceNode = resultNode["distance"];
                XmlNode caloriesNode = resultNode["calories"];
                XmlNode durationNode = resultNode["duration"];
                var hrNode = resultNode["heart-rate"];
                var userNode = resultNode["user-settings"];
                var hrUserNode = userNode["heart-rate"];
                XmlNode vo2MaxNode = userNode["vo2max"];

                exercise.time = DateTime.Parse(timeNode.InnerText);
                if(caloriesNode != null)
                    exercise.calories = Convert.ToInt32(caloriesNode.InnerText);
                if (durationNode != null) { 
                    try {exercise.duration = TimeSpan.Parse(durationNode.InnerText);}
                    catch (Exception e)
                    {
                        try
                        {
                            exercise.duration = TimeSpan.ParseExact(durationNode.InnerText, "mm':'ss", null);
                        }
                        catch (Exception)
                        {
                            exercise.duration = new TimeSpan(0);
                        }
                    }
                    }
                if (distanceNode != null)
                    exercise.distance = double.Parse(distanceNode.InnerText, NumberStyles.Any, CultureInfo.InvariantCulture);

                if (sportNode != null)
                    exercise.sport = sportNode.InnerText;

                var hr = new HeartRate();

                if (hrNode != null)
                {
                    XmlNode averageNode = hrNode["average"];
                    XmlNode maximumNode = hrNode["maximum"];

                    if (maximumNode != null)
                        hr.maximum = Convert.ToInt32(maximumNode.InnerText);

                    if (averageNode != null)
                        hr.average = Convert.ToInt32(averageNode.InnerText);
                }

                if (hrUserNode != null)
                {
                    XmlNode restingNode = hrUserNode["resting"];

                    if (restingNode != null)
                        hr.resting = Convert.ToInt32(restingNode.InnerText);
                }

                if (vo2MaxNode != null)
                    hr.vo2Max = Convert.ToInt32(vo2MaxNode.InnerText);

                exercise.heartRate = hr;

                exercises.Add(exercise);
            }

            return exercises;
        }
    }
}
